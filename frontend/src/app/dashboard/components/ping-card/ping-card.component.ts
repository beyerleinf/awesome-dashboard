import { Component, Input, OnInit } from '@angular/core';
import { ApolloError } from '@apollo/client/core';
import { Apollo, gql } from 'apollo-angular';
import { PingResult } from 'src/app/shared/models';

@Component({
  selector: 'app-ping-card',
  templateUrl: './ping-card.component.html',
  styleUrls: ['./ping-card.component.scss'],
})
export class PingCardComponent implements OnInit {
  currentPing: PingResult | undefined;
  loading = false;
  error: ApolloError | undefined;

  @Input() title!: string;
  @Input() prop!: keyof PingResult;
  @Input() unit!: string;
  @Input() format!: string;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery<{ lastPingResult: PingResult }>({
        query: gql`
          {
            lastPingResult {
              minPing
              maxPing
              avgPing
              packetLoss
            }
          }
        `,
        pollInterval: 10000,
      })
      .valueChanges.subscribe(result => {
        console.log('result', result);

        this.currentPing = result.data.lastPingResult;
        this.loading = result.loading;
        this.error = result.error;
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { ApolloError } from '@apollo/client/errors';
import { Apollo, gql } from 'apollo-angular';
import { PingResult } from 'src/app/shared/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  currentPing: PingResult | undefined;
  loading = false;
  error: ApolloError | undefined;

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

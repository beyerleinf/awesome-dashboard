export class CreatePingResultDTO {
  readonly avgPing: number;
  readonly minPing: number;
  readonly maxPing: number;
  readonly packetLoss: number;
  readonly stdDeviation: number;
}

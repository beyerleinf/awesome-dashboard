export interface PingResult {
  minPing: number;
  maxPing: number;
  avgPing: number;
  packetLoss: number;
  stdDeviation: number;
  timestamp: Date;
}

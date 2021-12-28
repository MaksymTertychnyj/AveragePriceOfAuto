
export class ResponseAVG{
    
  constructor(
    public total: number,
    public arithmeticMean: number,
    public interQuartileMean: number,
    public percentiles: Map<string, number>,
    public prices: number[],
    public classifieds: number[]
        )
    {}

}

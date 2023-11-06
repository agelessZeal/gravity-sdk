import { BigNumber } from "@ethersproject/bignumber";
import { Pool, HybridPool } from "../types/MultiRouterTypes";
export declare function HybridComputeLiquidity(pool: HybridPool): BigNumber;
export declare function HybridgetY(pool: HybridPool, x: BigNumber): BigNumber;
export declare function calcOutByIn(pool: Pool, amountIn: number, direction?: boolean): number;
export declare function calcInByOut(pool: Pool, amountOut: number, direction: boolean): number;
export declare function calcPrice(pool: Pool, amountIn: number): number;
export declare function calcInputByPrice(pool: Pool, priceEffective: number, hint?: number): number;
export declare function ASSERT(f: () => boolean, t?: string): void;
export declare function closeValues(a: number, b: number, accuracy: number): boolean;
export declare function calcSquareEquation(a: number, b: number, c: number): [number, number];
export declare function revertPositive(f: (x: number) => number, out: number, hint?: number): number;
export declare function getBigNumber(valueBN: BigNumber | undefined, value: number): BigNumber;

import JSBI from "jsbi";
export * from "./addresses";
export * from "./natives";
export * from "./tokens";
export * from "./numbers";
export declare const INIT_CODE_HASH: string;
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: JSBI;
    uint256: JSBI;
};
export declare const LAMBDA_URL = "https://9epjsvomc4.execute-api.us-east-1.amazonaws.com/dev";
export declare const SOCKET_URL = "wss://hfimt374ge.execute-api.us-east-1.amazonaws.com/dev";

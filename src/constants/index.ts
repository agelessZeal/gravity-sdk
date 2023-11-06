import JSBI from "jsbi";

export * from "./addresses";
export * from "./natives";
export * from "./tokens";
export * from "./numbers";

export const INIT_CODE_HASH: string =
  "0x59f0dd0ec2453a509915048cac1608e1a52938dbcdf6b4960b21592e7996743a";

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000);

export enum SolidityType {
  uint8 = "uint8",
  uint256 = "uint256"
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt("0xff"),
  [SolidityType.uint256]: JSBI.BigInt(
    "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
  )
};

export const LAMBDA_URL =
  "https://9epjsvomc4.execute-api.us-east-1.amazonaws.com/dev";

export const SOCKET_URL =
  "wss://hfimt374ge.execute-api.us-east-1.amazonaws.com/dev";

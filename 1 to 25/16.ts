//matter most open source project code

export const SelfHostedSignUpProgress = {
  START: "start",
  CREATED_CUSTOMER: "CREATED_CUSTOMER",
  CREATED_INTENT: "CREATED_INTENT",
} as const;

export type ValueOf<T> = T[keyof T];

export const TypePurchases = {
  firstSelfHostLicensePurchase: "first_purchase",
  renewalSelfHost: "renewal_self",
} as const;

export type MetaDataGatherWithTransferKeys = `${ValueOf<
  typeof TypePurchases
>}_alt_payment_method`;

/* export const VAR_NAME = VALUE; */

export const SERVER_CHECK_STATUS_DELAY = 3000;
export const GHOST_ANIMATE_DELAY = 500;
export const PRELOAD_ANIMATE_DELAY = (GHOST_ANIMATE_DELAY * 4);


export const Customers = [
    "ID",
    "тип клиента",
    "имя физического лица или название компании",
    "дата рождения для физических лиц",
    "дата регистрации для юридических лиц",
    "ИНН клиента",
    "контактная информация",   
]

export const CreditProducts = [
    "уникальный идентификатор продукта",
    "название продукта",
    "процентная ставка по продукту",
    "максимальная сумма кредита по продукту",
    "минимальный срок погашения",
    "требование обеспечения",
]

export const CreditAgreements = [
    "уникальный идентификатор договора",
    "идентификатор клиента, заключившего договор",
    "идентификатор продукта, связанного с договором",
    "дата заключения договора",
    "сумма кредита",
    "срок кредита",
    "процентная ставка договора",   
]

export const TransactionTypes = [
    "уникальный идентификатор типа операции",
    "название типа операции",
]

export const CreditTransactions = [
    "уникальный идентификатор транзакции",
    "идентификатор клиента, связанного с транзакцией",
    "идентификатор договора, к которому относится транзакция",
    "дата выполнения операции",
    "сумма операции",
    "идентификатор типа операции",
]

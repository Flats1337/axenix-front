# config
PROMPT = """select CP.ProductName, count(CP.CreditProductID) as Count_
from CreditProducts CP, CreditAgreements CA
group by CP.ProductName, CP.CreditProductID, CA.CreditProductID
having CP.CreditProductID = CA.CreditProductID
"""
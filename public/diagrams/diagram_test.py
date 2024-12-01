# coding:cp1251
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np


def data_forming(path, name):
    return pd.read_csv(path).get(name).to_numpy().tolist()


if __name__ == "__main__":
    data_path_pie = {"CT": [r"DF/CreditTransactions.csv", "TransactionTypeID"], "TT": [r"DF/TransactionTypes.csv", "TransactionTypeName"]}
    data: list = data_forming(data_path_pie["CT"][0], data_path_pie["CT"][1])
    figure, ax = plt.subplots()

    values: list = data_forming(data_path_pie["TT"][0], data_path_pie["TT"][1])
    keys: list = data_forming(data_path_pie["TT"][0], data_path_pie["CT"][1])
    names: dict = {}
    for key, value in zip(keys, values):
        names[key] = value

    count: dict = dict().fromkeys(data)
    for counter in set(data):
        count[counter] = data.count(counter)

    for item in range(1, len(names)+1):
        count[names[item]] = count.pop(item)

    """val = data_forming(r"DF/CreditProducts.csv", "ProductName")
    for key, value in zip(names.keys(), val):
        names[key] = value.replace(" ", "\n", count=2)"""

    colors = plt.get_cmap("Blues")(np.linspace(0.5, 0.8, len(count.keys())))
    ax.pie(x=count.values(), labels=count.keys(), colors=colors, radius=1)
    # # plt.subplots_adjust(bottom=0.15)
    ax.set_title("Совершенные операции")
    plt.savefig("pie")
    plt.show()

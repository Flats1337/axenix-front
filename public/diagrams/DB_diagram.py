# coding:cp1251
import matplotlib.pyplot as plt
import pymssql as bd
from db_settings import DATABASE, PROMPT


def data_base_cursor(server, db, username, password):
    connection = bd.connect(server=server, user=username, password=password, database=db)
    return connection.cursor(as_dict=False)


if __name__ == "__main__":
    cursor = data_base_cursor(DATABASE["SERVER"], DATABASE["DB"], DATABASE["USERNAME"], DATABASE["PASSWORD"])
    cursor.execute(PROMPT)

    diagram = {}
    for item in cursor.fetchall():
        diagram[item[0]] = item[1].replace(" ", "\n", 2)

    fig, ax = plt.subplots()

    ax.bar(diagram.keys(), diagram.values(), width=0.5, linewidth=4)
    plt.savefig("diagram")
    plt.show()
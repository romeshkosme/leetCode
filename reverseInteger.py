def main(x):
    reverse_integer = 0

    while x < 0 or x > 0:
        print("1 -- ", x)
        remainder = x % 10
        print("remainder -- ", remainder)
        reverse_integer = (reverse_integer * 10) + remainder
        print("reverse_integer -- ", reverse_integer)
        x = x // 10 if x > 0 else ((x // 10) + 1)
        print("last -- ",x)

    if reverse_integer >= pow(-2, 21) and reverse_integer <= pow(2, 31):
        return reverse_integer
    else:
        return 0

answer = main(123)
print(answer)

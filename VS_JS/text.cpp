#include <iostream>
#include <map>
#include <string>
using namespace std;
//定义用户类
class User {
public:
    string name;
    map<string, int> borrowRecord; //记录用户的借还记录
    User(string name) {
        this->name = name;
    }
};
//定义借贷类
class Loan {
public:
    User *borrower; //借款人
    User *lender; //出借人
    int amount; //借款金额
    Loan(User *borrower, User *lender, int amount) {
        this->borrower = borrower;
        this->lender = lender;
        this->amount = amount;
    }
    //借款人借钱给出借人
    void borrow() {
        borrower->borrowRecord[lender->name] += amount;
    }
    //出借人还钱给借款人
    void repay() {
        borrower->borrowRecord[lender->name] -= amount;
    }
    //催债
    void urge() {
        cout << "催债：" << borrower->name << "应该还" << lender->name << " " << amount << "元" << endl;
    }
};
int main() {
    User *A = new User("A");
    User *B = new User("B");
    Loan *loan = new Loan(A, B, 100);
    loan->borrow(); //A借钱给B
    B->borrowRecord = A->borrowRecord; //B授权查看A的借还记录
    loan->repay(); //B还钱给A
    loan->urge(); //催债
    return 0;
}



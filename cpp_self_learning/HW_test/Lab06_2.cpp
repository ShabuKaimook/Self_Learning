#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

void dest_rotate_list1(vector<int> list_a, int n){
    int num = abs(n) % list_a.size();
    
    if (n > 0){
        for (int i = 0; i < num; i++){
            int a = list_a.back();
            list_a.pop_back();
            list_a.insert(list_a.begin(), a);
        }
    } else {
        for (int i = 0; i < num; i++){
            int a = list_a.front();
            list_a.erase(list_a.begin());
            list_a.push_back(a);
        }
    }
}

void dest_rotate_list2(vector<int> list_a, int n){
    int num = abs(n) % list_a.size();

    if (n > 0){
        rotate(list_a.begin(), list_a.end() - num, list_a.end());
    }else{
        rotate(list_a.begin(), list_a.begin() + num, list_a.end());
    }
    for (int i = 0; i < list_a.size(); i++){
        cout << list_a[i] << " ";
    }
    cout << endl;
}

int main(){
    vector<int> a = {1,2,3,4};
    dest_rotate_list2(a, 105);
    for (int i = 0; i < a.size(); i++){
        cout << a[i] << " ";
    }
    
    cout << endl;

    // rotate from pos at middle of syntax - end to left side
    // ex 1 2 3 4 (middle syntax = begin + 1 mean a[1:] rotate to left side)
    // rotate(a.begin(), a.end() - 1, a.end());

    // // พิมพ์เวกเตอร์
    // for (int i = 0; i < a.size(); i++) {
    //     cout << a[i] << " ";
    // }

    return 0;
}
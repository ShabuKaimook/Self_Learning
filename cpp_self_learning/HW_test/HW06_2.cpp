#include <iostream>
#include <vector>
#include <string>
#include<algorithm>
using namespace std;

string decode_helper(string code_table, string str_index){
    if (str_index == "\n"){
        return "\n";
    }else{
        int n = stoi(str_index);
        int lenght = code_table.length();
        if (n >= 0 && n < lenght){
            char ch = code_table[n];
            return string(1, ch);

        }else{
            return "_";
            }
    }
}

string decode(string code_table, string text){
    vector <string> text_list = {};
    string data = "";
    string result = "";
    for (char w: text){
        if (w == ' '){
            text_list.push_back(data);
            data = "";
        }else if (w == '.'){
            text_list.push_back("\n");
        }else{
            data += string(1, w);
        }
        
    }
    for (string num: text_list){
        cout << num << " ";
    }

    for (string t: text_list){
        result += decode_helper(code_table, t);
    }

    return result;
}


int main(){
    string str = "3 . 5 3 4 2 . 3 1 2 8 1 7 2 0 86 .";
    string s = "123";
    cout << stoi(s) << endl;
    cout << decode("aceiklmr-", str) << endl;
}

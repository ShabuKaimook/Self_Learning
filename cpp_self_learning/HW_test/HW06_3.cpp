#include <iostream>
#include <vector>
using namespace std;


vector <float> moving_average(vector <float> list_a,int w){
    int lenght = list_a.size();

    // cout << lenght << " "<< w;
    // if (w > lenght);
    //     return {};
    
    vector<float> result = {};
    int round = lenght - (w - 1);
    for (int i = 0; i < round; i++){
        //first round
        //index i+j ... i+w-1
        int sum_ = 0;
        for (int j = 0; j < w; j++){
            sum_ += list_a[i + j];
        }
        result.push_back(sum_/float(w));
    }

    for (float n: result){
        cout << n << " ";
    }
    return result;
}


int main(){
    vector <float> a = {1,2,3,4,5};
    int w = 3;
    
    vector <float> result = moving_average(a, w);
    // for (float n: result){
    //     cout << n << " ";
    // }
    cout << endl;
}
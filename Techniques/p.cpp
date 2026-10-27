#include <iostream>
#include<string>
using namespace std;

string encode(vector<string> &strs)
{
    string encodedString = "";

    for (int i = 0; i < strs.size(); i++) {
        int length = strs[i].length();
        encodedString += to_string(length);
        encodedString += '#';
        encodedString += strs[i];
    }
    return encodedString;
}

vector<string> decode(string s) {
        vector<string> res;
        int i = 0;
        while(i < s.length()) {
            int len = 0;
            int j = i;
            while(s[j] != '#') {
                j++;
            }
            len = stoi(s.substr(i, j - i));
            i = j + 1;
            string word = s.substr(i, len);
            res.push_back(word);
            
            i += len;
        }

        return res;
}

int main()
{
    vector<string> str = {"need", "for", "speed"};
    string res = encode(str);
    cout << res << endl;
    vector<string> rs = decode(res);
    for(int i=0; i<rs.size(); i++) {
        cout << rs[i] << " ";
    }

}
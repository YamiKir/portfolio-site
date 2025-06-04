#include <iostream>
#include <vector>
using namespace std;

void pascal(vector<int>* list_previous);
void pascal_display();

void pascal_display() {
    vector<int> prev;  
    prev.push_back(1);
    pascal(&prev);
}

void pascal(vector<int>* list_previous) {
    if (list_previous == nullptr) {
        return;
    }

    // Print current row
    for (const auto &value : *list_previous) {
        cout << value << "   ";
    }
    cout << "\n";

    // Generate next row
    vector<int> next;
    next.push_back(1);
    for (size_t i = 1; i < list_previous->size(); i++) {
        next.push_back((*list_previous)[i - 1] + (*list_previous)[i]);
    }
    next.push_back(1);

    if (list_previous->size() < 20) { // Limiting recursion to avoid infinite loop
        pascal(&next);
}

    }


int main() {
    pascal_display();
    return 0;
    
	}

#include<iostream>
using namespace std;

void displayBoard(char board[3][3]);
bool checkWin(char board[3][3], char player);

int main() {
    char board[3][3];
    bool player1 = true; // Start with player1 (o)
    bool player2 = false;
    bool win = false;
    bool goAgain;
    int row, col;

    // Initialize the board
    for(int i = 0; i < 3; i++) {
        for(int j = 0; j < 3; j++) {
            board[i][j] = '@';
        }
    }

    cout << "Tic Tac Toe Game \n";
    displayBoard(board);

    while(!win) {
        if(player1) {
            cout << "Player 1 (O), enter your move (row and column 0-2): ";
            do {
                cin >> row >> col;
                if(cin.fail()){
                	cin.clear();
                	cin.ignore(1000,'\n');
                	goAgain=true;
                	continue;
				}
                
               
                if(row >= 0 &&  row < 3 && col >= 0 && col < 3 && board[row][col] == '@') {
                    board[row][col] = 'O';
                    goAgain = false;
                } else {
                    cout << "Invalid move. Try again: ";
                    goAgain = true;
                }
            } while(goAgain);
            player1 = false;
            player2 = true;
        } else if(player2) {
            cout << "Player 2 (X), enter your move (row and column 0-2): ";
            do {
                cin >> row >> col;
                 if(cin.fail()){
                	cin.clear();
                	cin.ignore(1000,'\n');
                	goAgain=true;
                	continue;
				}
                if(row >= 0 && row < 3 && col >= 0 && col < 3 && board[row][col] == '@') {
                    board[row][col] = 'X';
                    goAgain = false;
                } else {
                    cout << "Invalid move. Try again: ";
                    goAgain = true;
                }
            } while(goAgain);
            player1 = true;
            player2 = false;
        }

        displayBoard(board);

        if(checkWin(board, 'O')) {
            cout << "Player 1 (O) wins!\n";
            win = true;
        } else if(checkWin(board, 'X')) {
            cout << "Player 2 (X) wins!\n";
            win = true;
        }
    }

    return 0;
}

void displayBoard(char board[3][3]) {
    for(int i = 0; i < 3; i++) {
        for(int j = 0; j < 3; j++) {
            cout << board[i][j];
            if(j < 2) cout << " | ";
        }
        cout << endl;
        if(i < 2) cout << "--|---|--\n";
    }
}

bool checkWin(char board[3][3], char player) {
    // Check rows and columns
    for(int i = 0; i < 3; i++) {
        if((board[i][0] == player && board[i][1] == player && board[i][2] == player) ||
           (board[0][i] == player && board[1][i] == player && board[2][i] == player)) {
            return true;
        }
    }
    // Check diagonals
    if((board[0][0] == player && board[1][1] == player && board[2][2] == player) ||
       (board[0][2] == player && board[1][1] == player && board[2][0] == player)) {
        return true;
    }
    return false;
}


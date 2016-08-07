// Design a Snake game that is played on a device with screen size = width x height. Play the game online if you are not familiar with the game.

// The snake is initially positioned at the top left corner (0,0) with length = 1 unit.

// You are given a list of food's positions in row-column order. When a snake eats the food, its length and the game's score both increase by 1.

// Each food appears one by one on the screen. For example, the second food will not appear until the first food was eaten by the snake.

// When a food does appear on the screen, it is guaranteed that it will not appear on a block occupied by the snake.

// Example:
// Given width = 3, height = 2, and food = [[1,2],[0,1]].

// Snake snake = new Snake(width, height, food);

// Initially the snake appears at position (0,0) and the food at (1,2).

// |S| | |
// | | |F|

// snake.move("R"); -> Returns 0

// | |S| |
// | | |F|

// snake.move("D"); -> Returns 0

// | | | |
// | |S|F|

// snake.move("R"); -> Returns 1 (Snake eats the first food and right after that, the second food appears at (0,1) )

// | |F| |
// | |S|S|

// snake.move("U"); -> Returns 1

// | |F|S|
// | | |S|

// snake.move("L"); -> Returns 2 (Snake eats the second food)

// | |S|S|
// | | |S|

// snake.move("U"); -> Returns -1 (Game over because snake collides with border)

// Credits:
// Special thanks to @elmirap for adding this problem and creating all test cases.

// Hide Company Tags Google
// Hide Tags Design Queue



public class SnakeGame {

    /** Initialize your data structure here.
        @param width - screen width
        @param height - screen height 
        @param food - A list of food positions
        E.g food = [[1,1], [1,0]] means the first food is positioned at [1,1], the second is at [1,0]. */
        
    private Set<String> board = new HashSet<>();
    private int[][] food;
    private int eat = 0;
    private LinkedList<Position> snake = new LinkedList<>();
    private int width, height;
        
        
    private boolean eat(int y, int x) {
        if(eat >= food.length) {
            return false;
        }
        if(food[eat][0] < 0 || food[eat][0] >= height || food[eat][1] <0 || food[eat][1] >= width) {
            return false;
        }
        if(y == food[eat][0] && x == food[eat][1]) {
            return true;
        }
        
        return false;
    }
        
        
    public SnakeGame(int width, int height, int[][] food) {
        this.food = food;
        Position head = new Position(0,0);
        this.snake.add(head);
        board.add(head.toString());
        this.height = height;
        this.width = width;
    }
    
    /** Moves the snake.
        @param direction - 'U' = Up, 'L' = Left, 'R' = Right, 'D' = Down 
        @return The game's score after the move. Return -1 if game over. 
        Game over when snake crosses the screen boundary or bites its body. */
    public int move(String direction) {
        Position head = snake.getFirst();
        Position next = new Position(head.y, head.x);
        
        if("U".equals(direction)) {
            next.y--;
        } else if("D".equals(direction)) {
            next.y++;
        } else if("L".equals(direction)) {
            next.x--;
        } else if("R".equals(direction)) {
            next.x++;
        } else {
            return -1;
        }
        
        if(next.y < 0 || next.y >= height || next.x < 0 || next.x >= width) {
            return -1;
        }
        
        String ns = next.toString();
        if(eat(next.y, next.x)) {
            snake.addFirst(next);
            board.add(ns);
            return ++eat;
        }
        
        Position tail = snake.getLast();
        board.remove(tail.toString());
        snake.removeLast();
        
        if(board.contains(ns)) {
            return -1;
        }
        
        snake.addFirst(next);
        board.add(ns);
        return eat;
    }
}

class Position {
    int x, y;
    
    Position(int y, int x) {
        this.y = y;
        this.x = x;
    }
    
    public String toString() {
        return y + "," + x;
    }
}

/**
 * Your SnakeGame object will be instantiated and called as such:
 * SnakeGame obj = new SnakeGame(width, height, food);
 * int param_1 = obj.move(direction);
 */
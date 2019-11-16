const finalPosition = (moves) => {
    let [x, y] = [0, 0]

    moves.map(move => {
        switch (move) {
            case 'north':
                y++;
                break;
            case 'west':
                x--;
                break;
            case 'south':
                y--;
                break;
            case 'east':
                x++;
                break;
            default:
                return;
        }
    });

    return [x, y];
};
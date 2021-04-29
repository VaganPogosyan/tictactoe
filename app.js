$(() => {

    for (let i = 1; i <= 9; i++) {
        const $square = $('<div></div>');
        $($square).appendTo('#field').addClass('square').attr('id', '#square' + i);
    }

    let $count = true;

    $('.square').one('click', function clicking() {
        if ($count === false) {
            $('<p>X</p>').appendTo(this).addClass('sign');
            $count = !$count;
        } else {
            $('<p>O</p>').appendTo(this).addClass('sign');
            $count = !$count;
        }

    })

    // const $combinations = [
    //     [1, 2, 3],
    //     [4, 5, 6],
    //     [7, 8, 9]
    // ]

    // const $winningCombinations = [
    //     [1, 2, 3],
    //     [4, 5, 6],
    //     [7, 8, 9],
    //     [1, 4, 7],
    //     [2, 5, 8],
    //     [3, 6, 9],
    //     [1, 5, 9],
    //     [3, 5, 7]
    // ];

    // game logic
    // if ($('.sign') ===  )

})


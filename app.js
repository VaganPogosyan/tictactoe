$(() => {

    for (let i = 1; i <= 9; i++) {
        const $square = $('<div> ' + i + ' </div>');
        $($square).appendTo('#field').addClass('square');
    }



    const $winningCombinations = [
        [0, 0, 0],
        [0, 0, 0]
    ]
})


player.onChat("createNetherGate", function () {
    blocks.fill(
    OBSIDIAN,
    pos(-2, 0, 5),
    pos(2, 5, 5),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    pos(-1, 1, 0),
    pos(1, 4, 5),
    FillOperation.Replace
    )
    blocks.place(FIRE, pos(0, 1, 5))
})

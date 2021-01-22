while (true) {
    console.log(input.soundLevel() + input.lightLevel())
    while (input.lightLevel() < 6) {
        if (input.soundLevel() > 100) {
            light.setAll(color.rgb(255, 0, 0))
            music.siren.playUntilDone()
        }
        
    }
}

while (true) {
    console.log("Sound level: " + input.soundLevel() + " ---" + " Light level: " + input.lightLevel())
    while (input.lightLevel() < 7) {
        if (input.soundLevel() > 50) {
            light.setAll(color.rgb(255, 0, 0))
            music.siren.playUntilDone()
        }
        
    }
}

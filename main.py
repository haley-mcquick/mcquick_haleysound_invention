while True:    
    print("Sound level: " + input.sound_level() + " ---" + " Light level: " + input.light_level())
    while input.light_level() < 7:
        if input.sound_level() > 50:
            light.set_all(color.rgb(255, 0, 0))
            music.siren.play_until_done()

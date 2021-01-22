while True:
    print(input.sound_level() + input.light_level())

    while input.light_level() < 6:
        if input.sound_level() > 100:
            light.set_all(color.rgb(255, 0, 0))
            music.siren.play_until_done()

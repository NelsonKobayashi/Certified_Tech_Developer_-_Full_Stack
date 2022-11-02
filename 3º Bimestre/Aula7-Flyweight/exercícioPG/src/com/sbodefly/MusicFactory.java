package com.sbodefly;

import java.util.HashMap;

public class MusicFactory {
    private static final HashMap<String, Music> musicMap = new HashMap();

    public static Music getMusic(String nome) {
        Music music = (Music) musicMap.get(nome);

        if(music == null) {
            music = new Music("tonbo", "Nagabushi","jpop");
            musicMap.put(nome, music);
            System.out.println("Criando nova música para sua lista: " + nome);
        }
        return music;
    }
}

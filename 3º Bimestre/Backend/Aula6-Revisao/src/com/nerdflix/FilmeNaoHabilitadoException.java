package com.nerdflix;

public class FilmeNaoHabilitadoException extends Exception{

    public FilmeNaoHabilitadoException(String messageForUser){
        super(messageForUser);
    }
}

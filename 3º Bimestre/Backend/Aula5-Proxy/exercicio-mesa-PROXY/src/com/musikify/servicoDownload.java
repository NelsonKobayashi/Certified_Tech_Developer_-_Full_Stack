package com.musikify;

public class servicoDownload implements IAssinante {

    @Override
    public void assinar(Usuario usuario) {
        System.out.println("Serviço contratado confirmado, pode fazer o download.");
    }
}

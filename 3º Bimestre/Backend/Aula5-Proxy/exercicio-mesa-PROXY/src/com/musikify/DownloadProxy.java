package com.musikify;

public class DownloadProxy implements IAssinante{

    @Override
    public void assinar(Usuario u) {
        if (u.getTipo().equalsIgnoreCase("premium")) {
            System.out.println("Download permitido, faz a festa aí!");
        } else {
            System.out.println("Contrate o serviço Premium, para poder baixar as músicas.");
        }
    }
}

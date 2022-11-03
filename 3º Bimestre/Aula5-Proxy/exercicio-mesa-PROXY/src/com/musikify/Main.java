package com.musikify;

public class Main {
    public static void main(String[] args) {

        Usuario usuario = new Usuario(1,"premium");

        IAssinante assinatura = new DownloadProxy();
        assinatura.assinar(usuario);

        usuario = new Usuario(2,"free");
        assinatura.assinar(usuario);
            }
}

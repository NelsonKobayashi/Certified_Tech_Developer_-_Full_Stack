package com.computerproject;

public class Application {
    public static void main(String[] args) {

        ComputerFactory computer = new ComputerFactory();
        Computer mac1 = computer.getComputer(16,500);
        Computer windows = computer.getComputer(4,256);
        Computer mac2 = computer.getComputer(16,500);

        System.out.println(mac1.toString());
        System.out.println(windows.toString());
        System.out.println(mac2.toString());
//        mac1.toString();
//        mac2.toString();

    }
}

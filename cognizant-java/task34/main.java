package com.greetings;

import com.utils.Utility;

public class Main {

    public static void main(String[] args) {

        Utility.greet();
    }
}
/*

javac -d mods/com.utils com.utils/*.java
javac --module-path mods -d mods/com.greetings com.greetings/*.java
java --module-path mods -m com.greetings/com.greetings.Main

*/
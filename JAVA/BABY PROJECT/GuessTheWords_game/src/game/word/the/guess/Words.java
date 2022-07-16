package game.word.the.guess;

import java.util.Random;

public class Words {
    /*
    =================================
    EXPERIMENTAL CODE...
    ===========================================


    String[] randomWords={"animals","happiness","love", "politics","properties","ceremony","independence","benetha",
        "education","Mba"};
    private String selectedWord;

    private Random random = new Random();

    private char[] letters;

    public Words(){
        selectedWord = randomWords[random.nextInt(randomWords.length)];
        letters = new char[selectedWord.length()];
    }
    public String toString(){
//        String word = "";
//        letters[2]='a';


        //INSTEAD OF THIS WE COULD MAKE STRING BUILDER....

        StringBuilder text = new StringBuilder();

        for(char letter:letters){
            if (letter=='\u0000'){
                //word +='-';
                text.append('-');
            }
            else{
                //word +=letter;
                text.append(letter);
            }
            text.append(' ');
        }
        return text.toString();
    }

    */







    //=============================
//    FIANAL CODE..............
//    ================================

    private String[] randomWords = { "animals", "happiness", "indefinite", "steady", "birthday", "extreme", "rights",
            "properties", "ceremony", "independence", "beneath", "information", "students", "employee" };

    private String selectedWord;
    private Random random = new Random();
    private char[] letters;

    public Words() {
        selectedWord = randomWords[random.nextInt(randomWords.length)];
        letters = new char[selectedWord.length()];
    }

    public String toString() {

        StringBuilder text = new StringBuilder();

        for (char letter : letters) {

            text.append(letter == '\u0000' ? '-' : letter);
            text.append(' ');
        }

        return text.toString();
    }

    public boolean isGuessedRight() {

        for (char letter : letters) {
            if (letter == '\u0000') {
                return false;
            }
        }
        return true;
    }

    public boolean guess(char letter) {

        boolean guessedRight = false;

        for (int i = 0; i < selectedWord.length(); i++) {
            if (letter == selectedWord.charAt(i)) {
                letters[i] = letter;
                guessedRight = true;
            }
        }
        return guessedRight;

    }
}

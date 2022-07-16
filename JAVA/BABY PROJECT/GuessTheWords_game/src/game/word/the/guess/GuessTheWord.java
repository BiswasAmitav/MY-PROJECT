package game.word.the.guess;

public class GuessTheWord {
    private boolean play=true;
    private Words randomWord = new Words();
    public void start(){
        do{
            showWord();
            getInput();
            checkInput();
        }while(play);
    }


    void showWord(){
        System.out.println("Show word ...");
    }

    void getInput(){
        System.out.println("Get Input");
    }

    void checkInput(){
        System.out.println("Check Input");
    }


}

package game.word.the.guess;

public class Words {
    String[] randomWords={"animals","happiness","love", "politices","properties","ceremony","independence","benetha",
        "education","Mba"};
    private String selectedWord;

    public Words(){
        selectedWord = randomWords[3];
    }
    public String toString(){
        return randomWords[1];
    }
}

import java.util.LinkedHashSet;
import java.util.Set;
import java.util.TreeSet;

public class exercicio2 {
    public static void main(String[] args) {
        LinguagemFavorita java = new LinguagemFavorita("Java", 1995, "Eclipse");
        LinguagemFavorita rust = new LinguagemFavorita("Rust", 2010, "VS Code");
        LinguagemFavorita kotlin = new LinguagemFavorita("Kotlin", 2011, "IntelliJ");
        Set<LinguagemFavorita> linguagensFavoritas = new LinkedHashSet<>();
        linguagensFavoritas.add(java);
        linguagensFavoritas.add(rust);
        linguagensFavoritas.add(kotlin);
        System.out.println("========= Minhas linguagens favoritas por ordem de inserção =========");
        for (LinguagemFavorita linguagens : linguagensFavoritas) System.out.println(linguagens);
        System.out.println("========= Minhas linguagens favoritas ordenadas por nome =========");
        Set<LinguagemFavorita> linguagensFavoritasNome = new TreeSet<>(linguagensFavoritas);
        for (LinguagemFavorita linguagens : linguagensFavoritasNome) System.out.println(linguagens);
        System.out.println("========= Minhas linguagens favoritas ordenadas por IDE =========");
        Set<LinguagemFavorita> linguagensFavoritasIde = new TreeSet<>(new ComparatorIde());
        linguagensFavoritasIde.addAll(linguagensFavoritas);
        for (LinguagemFavorita linguagens : linguagensFavoritasIde) System.out.println(linguagens);
        Set<LinguagemFavorita> linguagensFavoritasAnoNome = new TreeSet<>(new ComparatorAnoNome());
        linguagensFavoritasAnoNome.addAll(linguagensFavoritas);
        System.out.println("========= Minhas linguagens favoritas ordenadas por ano e nome =========");
        for (LinguagemFavorita linguagens : linguagensFavoritasAnoNome) System.out.println(linguagens);
        Set<LinguagemFavorita> linguagensFavoritasAnoNomeIde = new TreeSet<>(new ComparatorNomeAnoIde());
        linguagensFavoritasAnoNomeIde.addAll(linguagensFavoritas);
        System.out.println("========= Minhas linguagens favoritas ordenadas por nome, ano e IDE ==========");
        for (LinguagemFavorita linguagens : linguagensFavoritasAnoNomeIde) System.out.println(linguagens);
    }
}

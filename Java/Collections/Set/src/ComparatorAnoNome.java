import java.util.Comparator;

public class ComparatorAnoNome implements Comparator<LinguagemFavorita> {
    @Override
    public int compare(LinguagemFavorita l1, LinguagemFavorita l2) {
        int resultado = Integer.compare(l1.getAnoDeCriacao(), l2.getAnoDeCriacao());
        if (resultado != 0) {
            return resultado;
        }
        return l1.getNome().compareToIgnoreCase(l2.getNome());
    }
}

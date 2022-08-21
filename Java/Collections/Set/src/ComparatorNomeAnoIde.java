import java.util.Comparator;

public class ComparatorNomeAnoIde implements Comparator<LinguagemFavorita> {
    @Override
    public int compare(LinguagemFavorita l1, LinguagemFavorita l2) {
        int resultadoNome = l1.getNome().compareToIgnoreCase(l2.getNome());
        int resultadoAno = Integer.compare(l1.getAnoDeCriacao(), l2.getAnoDeCriacao());
        if (resultadoNome != 0) {
            return resultadoNome;
        }
        if (resultadoAno != 0) {
            return resultadoAno;
        }
        return l1.getIde().compareToIgnoreCase(l2.getIde());
    }
}

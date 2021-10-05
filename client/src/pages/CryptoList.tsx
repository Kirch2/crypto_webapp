import { CryptoCard } from "../components/CryptoCard";
import { CryptoFetcher } from "../components/CryptoFetcher";
import { Loading } from "../components/Loading";

export function CryptoList() {
  return (
    <CryptoFetcher>
      {({ loading, cryptocurrencies }) => {
        if (loading) {
          return <Loading />;
        }

        return (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {cryptocurrencies.map((crypto) => (
              <CryptoCard crypto={crypto} key={crypto.id} />
            ))}
          </div>
        );
      }}
    </CryptoFetcher>
  );
}

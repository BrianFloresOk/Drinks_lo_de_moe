import DrinkDetailModal from "../../components/DrinkModal";
import DrinksList from "../../components/DrinksList";
import SearchForm from "../../components/SearchForm";

export default function Home() {
    return(
        <div>
            <SearchForm />

            <DrinksList />
        
            <DrinkDetailModal />
        </div>
    )
}
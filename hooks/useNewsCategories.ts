import newsCategoryList from "@/constants/Categories";
import { useCallback, useState } from 'react';

export const useNewsCategories = () => {
    const [newsCategories, setNewsCategories] = useState(newsCategoryList);

    const toggleNewsCategory = useCallback((id:number) => {
        setNewsCategories((preNewsCategories) => {
            return preNewsCategories.map((item) => {
                if(item.id === id) {
                    return {
                        ...item,
                        selected: !item.selected,
                    }
                }
                return item;
            })
        })
    }, []);

    return {
        newsCategories,
        toggleNewsCategory
    }
}
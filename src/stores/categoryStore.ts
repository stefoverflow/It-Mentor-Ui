import { makeAutoObservable, runInAction } from "mobx";
import { MenuItemProps } from "semantic-ui-react";
import { history } from "..";
import agent from "../api/agent";
import { Category } from "../models/category";

export default class CategoryStore {
  activeCategoryName: string | undefined = "";
  selectedCategoryId: string | undefined = "";
  fetchCategoriesInProgress: boolean = false;
  fetchCategoriesError: string = "";
  categories: Category[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  handleActiveCategoryName = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    data: MenuItemProps
  ) => {
    this.activeCategoryName = data.name;
  };

  fetchCategories = async () => {
    debugger
    runInAction(() => {
      this.fetchCategoriesInProgress = true;
      this.fetchCategoriesError = "";
    });
    try {
      const response = await agent.Categories.list();
      runInAction(() => {
        this.categories = response;
      });
    } catch (error) {
      runInAction(() => {
        this.fetchCategoriesError = "Nismo uspeli da pronađemo kategorije.";
      });
    } finally {
      runInAction(() => {
        this.fetchCategoriesInProgress = false;
      });
    }
  };

  setSelectedCategory = (categoryId: string | undefined) => {
    runInAction(() => (this.selectedCategoryId = categoryId));
  };

  getSelectedCategoryId = () => {
    return this.selectedCategoryId;
  };

  addCategory = async (id: string | undefined, name: string) => {
    try {
      debugger;
      const response = await agent.Categories.add(id, name);
      return response;
    } catch (error) {
      throw error;
    }
  };

  chooseCategory = async (consultantId: string, categoryId: string) => {
    await agent.Categories.choose(consultantId, categoryId);
    history.push("/skills");
  };
}

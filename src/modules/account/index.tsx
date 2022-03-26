import { Route, Routes } from "react-router-dom"
import { CommonLayout } from "../common/layout"
import { AccountsContainer } from "./containers/accounts.container"

export const Account = () => {
    return <CommonLayout>
        <Routes>
            <Route path="/" element={<AccountsContainer />} />
        </Routes>
    </CommonLayout>
}
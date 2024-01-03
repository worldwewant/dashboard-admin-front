/*
MIT License

Copyright (c) 2023 White Ribbon Alliance. Maintainers: Thomas Wood, https://fastdatascience.com, Zairon Jacobs, https://zaironjacobs.com.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

'use client'

import { useUserStore } from '@stores/user'
import { useRouter } from 'next/navigation'
import { CookieName, Path } from '@enums'
import Cookies from 'js-cookie'

export const useLogout = () => {
    const router = useRouter()
    const setUser = useUserStore((state) => state.setUser)

    // Logout user
    async function logout() {
        try {
            Cookies.remove(CookieName.TOKEN_1)
            Cookies.remove(CookieName.TOKEN_2)
            setUser(undefined)
            router.push(Path.LOGIN)
        } catch (error) {}
    }

    return logout
}

import create from 'zustand'

const useStore = create(set => ({
  user: {loggedIn:false},
  logIn: () => set({user:{loggedIn:true}}),
  logOut: () => set({user:{loggedIn:false}})
}))

export default useStore
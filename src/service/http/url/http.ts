// Auth
const getSignInUrl = (password: string, username: string) =>
    `/api/auth/signIn?password=${password}&username=${username}`;

// Proposal
const getProposalUrl = (id: string) => `/api/proposals?id=${id}`;
const getEditProposalUrl = () => `/api/proposals/edit`;

export { getSignInUrl, getProposalUrl, getEditProposalUrl };

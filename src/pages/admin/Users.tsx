import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Temporary mock data - replace with real data when backend is integrated
const users = [
  {
    id: 1,
    name: "João Silva",
    email: "joao@example.com",
    status: "Ativo",
    lastLogin: "2024-03-15",
    role: "Usuário"
  },
  {
    id: 2,
    name: "Maria Santos",
    email: "maria@example.com",
    status: "Ativo",
    lastLogin: "2024-03-14",
    role: "Admin"
  },
  {
    id: 3,
    name: "Pedro Oliveira",
    email: "pedro@example.com",
    status: "Inativo",
    lastLogin: "2024-03-10",
    role: "Usuário"
  },
];

const Users = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-[#D6BCFA] mb-6">Usuários</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Lista de Usuários</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>Lista de usuários cadastrados no sistema</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Último Acesso</TableHead>
                <TableHead>Função</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      user.status === 'Ativo' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {user.status}
                    </span>
                  </TableCell>
                  <TableCell>{user.lastLogin}</TableCell>
                  <TableCell>{user.role}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Users;
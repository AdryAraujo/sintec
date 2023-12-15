import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface Payload {
    login_rede: string,
    nm_usuario: string,
    cd_usuario: number,
    fl_usuario_ativo: boolean,
    cd_user_inclusao_usuario: number,
    dt_alteracao_usuario: Date,
    dt_inclusao_usuario: Date,
    cd_user_alteracao_usuario: number
}

class Authentication {
  public static passwordHash(senha_rede: string): Promise<string> {
    return bcrypt.hash(senha_rede, 10);
  }

  public static async passwordCompare(
    text: string,
    encryptedText: string
  ): Promise<boolean> {
    return await bcrypt.compare(text, encryptedText);
  }

  public static generateToken(
    login_rede: string,
    nm_usuario: string,
    cd_usuario: number,
    fl_usuario_ativo: boolean,
    cd_user_inclusao_usuario: number,
    dt_alteracao_usuario: Date,
    dt_inclusao_usuario: Date,
    cd_user_alteracao_usuario: number
  ): string {
    const secretKey: string = process.env.JWT_SECRET_KEY || "my-secret";
    const payload: Payload = {
        login_rede: login_rede,
        nm_usuario: nm_usuario,
        cd_usuario: cd_usuario,
        fl_usuario_ativo: fl_usuario_ativo,
        cd_user_inclusao_usuario: cd_user_inclusao_usuario,
        dt_alteracao_usuario: dt_alteracao_usuario,
        dt_inclusao_usuario: dt_inclusao_usuario,
        cd_user_alteracao_usuario: cd_user_alteracao_usuario
    };
    const option = { expiresIn: process.env.JWT_EXPIRES_IN };

    return jwt.sign(payload, secretKey, option);
  }

  public static validateToken(token: string): Payload | null {
    try {
      const secretKey: string = process.env.JWT_SECRET_KEY || "my-secret";
      return jwt.verify(token, secretKey) as Payload;
    } catch (err) {
      return null;
    }
  }
}

export default Authentication
-- Extend get_shared_vehicle to include the owner's unit preference from user_devices.
-- The LEFT JOIN is safe because user_devices.device_id has a UNIQUE constraint,
-- so the join cannot produce duplicate rows.

DROP FUNCTION IF EXISTS public.get_shared_vehicle(text);

CREATE FUNCTION public.get_shared_vehicle(p_slug text)
RETURNS TABLE (
  auth_user_id  text,
  created_at    timestamptz,
  current_odometer bigint,
  fuel_type     text,
  id            bigint,
  image_url     text,
  name          text,
  shared_link   text,
  transmission  text,
  user_id_link  text,
  year          bigint,
  unit          text
)
LANGUAGE sql
SECURITY DEFINER
SET search_path = 'public'
AS $$
  SELECT
    v.auth_user_id,
    v.created_at,
    v.current_odometer,
    v.fuel_type,
    v.id,
    v.image_url,
    v.name,
    v.shared_link,
    v.transmission,
    v.user_id_link,
    v.year,
    d.unit
  FROM vehicles v
  LEFT JOIN user_devices d ON d.device_id = v.user_id_link
  WHERE v.shared_link = p_slug
  LIMIT 1;
$$;
